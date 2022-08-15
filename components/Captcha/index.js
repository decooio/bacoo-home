import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import {getPicture, reqCheck} from '../../lib/http';
import {aesEncrypt} from '../../src/helper/utils';
const defaultImg = "/default.jpg"
class VerifySlideFixed extends Component{
    constructor(props) {
        super(props)
        this.state = {
            blockSize: {
                width: '50px',
                height: '50px'
            },
            setSize: {
                imgHeight: 200,
                imgWidth: 310,
                barHeight: 40,
                barWidth: 310,
            },
            backImgBase: '', // 验证码背景图片
            blockBackImgBase: '', // 验证滑块的背景图片
            backToken: '', // 后端返回的唯一token值
            startMoveTime:"",    //移动开始的时间
            endMovetime:'',      //移动结束的时间
            tipsBackColor:'',    //提示词的背景颜色
            secretKey: '', //后端返回的加密秘钥 字段
            captchaType: 'blockPuzzle',
            moveBlockBackgroundColor: 'rgb(255, 255, 255)',
            leftBarBorderColor: '',
            iconColor: '',
            barAreaLeft: 0,
            barAreaOffsetWidth: 0,
            startLeft: null,
            moveBlockLeft: null,
            leftBarWidth: null,
            status: false,	    //鼠标状态
            isEnd: false,		//是够验证完成
            passFlag: '',
            tipWords: '',
            text: 'Slide to complete the puzzle',
        }

    }

    componentDidMount() {
        this.uuid()
        this.getData()
        this.init()
    }
    // 初始话 uuid
    uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var slider = 'slider'+ '-'+s.join("");
        var point = 'point'+ '-'+s.join("");
        // 判断下是否存在 slider
        console.log(localStorage.getItem('slider'))
        if(!localStorage.getItem('slider')) {
            localStorage.setItem('slider', slider)
        }
        if(!localStorage.getItem('point')) {
            localStorage.setItem("point",point);
        }
    }
    init () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var _this = this

        window.removeEventListener("touchmove", function (e) {
            _this.move(e);
        });
        window.removeEventListener("mousemove", function (e) {
            _this.move(e);
        });

        //鼠标松开
        window.removeEventListener("touchend", function () {
            _this.end();
        });
        window.removeEventListener("mouseup", function () {
            _this.end();
        });

        window.addEventListener("touchmove", function (e) {
            _this.move(e);
        });
        window.addEventListener("mousemove", function (e) {
            _this.move(e);
        });

        //鼠标松开
        window.addEventListener("touchend", function () {
            _this.end();
        });
        window.addEventListener("mouseup", function () {
            _this.end();
        });
    }
    getData() {
        getPicture({captchaType: this.state.captchaType,clientUid: localStorage.getItem('slider'),ts: Date.now()}).then(res => {
            if(res.repCode === '0000') {
                this.setState({
                    backImgBase: res.repData.originalImageBase64,
                    blockBackImgBase: res.repData.jigsawImageBase64,
                    backToken: res.repData.token,
                    secretKey: res.repData.secretKey
                })
            }
            // 请求次数超限
            if(res.repCode === '6201') {
                this.setState({
                    backImgBase: null,
                    blockBackImgBase: null,
                    leftBarBorderColor: '#d9534f',
                    iconColor: '#fff',
                    iconClass: 'icon-close',
                    passFlag: false,
                    tipWords: res.repMsg
                })
                setTimeout(() => {
                    this.setState({
                        tipWords: ''
                    })
                }, 1000);
            }
        }).catch(e => {
            console.log(e);
        })
    }
    refresh = () => {
        this.getData()
        this.setState({
            moveBlockLeft: '',
            leftBarWidth: '',
            text: 'Slide to complete the puzzle',
            moveBlockBackgroundColor: '#fff',
            leftBarBorderColor: '#2cc8c2',
            iconColor: '#fff',
            status: false,
            isEnd: false
        })
    }
    setBarArea = (event) => {
        let barAreaLeft = event && event.getBoundingClientRect().left
        let barAreaOffsetWidth = event && event.offsetWidth
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.barAreaLeft = barAreaLeft
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.barAreaOffsetWidth = barAreaOffsetWidth
    }

    start = (e) => {
        e = e || window.event
        let x = 0
        if (!e.touches) {  //兼容PC端
            x = e.clientX;
        } else {
            e.touches[0].pageX
        }
        this.setState({
            startLeft:Math.floor(x - this.state.barAreaLeft),
            startMoveTime: +new Date()              //开始滑动的时间
        })
        if (this.state.isEnd === false) {
            this.setState({
                text: '',
                moveBlockBackgroundColor: '#337ab7',
                leftBarBorderColor: '#337AB7',
                iconColor: '#fff',
                status: true
            })
            this.text = ''
            e.stopPropagation();
        }
    }

    move = (e) => {
        e = e || window.event;
        if (this.state.status && this.state.isEnd === false) {
            let x
            if (!e.touches) {
                //兼容PC端
                x = e.clientX;
            } else {
                //兼容移动端
                x = e.touches[0].pageX;
            }
            let bar_area_left = this.state.barAreaLeft;
            let move_block_left = x - bar_area_left; //小方块相对于父元素的left值
            if (move_block_left >= this.state.barAreaOffsetWidth - parseInt(parseInt(this.state.blockSize.width) / 2) - 2) {
                move_block_left = this.state.barAreaOffsetWidth - parseInt(parseInt(this.state.blockSize.width) / 2) - 2;
            }
            if (move_block_left <= 0) {
                move_block_left = parseInt(this.state.blockSize.width / 2);
            }
            //拖动后小方块的left值
            const moveBlockLeft = (move_block_left - this.state.startLeft) + "px"
            const leftBarWidth = (move_block_left - this.state.startLeft) + "px"
            this.setState({
                moveBlockLeft,
                leftBarWidth
            })
        }
    }

    end = () => {
        let endMovetime = +new Date();
        //判断是否重合
        if (this.state.status && this.state.isEnd === false) {
            var moveLeftDistance = parseInt((this.state.moveBlockLeft || '').replace('px', ''));
            moveLeftDistance = moveLeftDistance * 310/ parseInt(this.state.setSize.imgWidth)



            let data = {
                captchaType:this.state.captchaType,
                "pointJson":this.state.secretKey ? aesEncrypt(JSON.stringify({x:moveLeftDistance,y:5.0}),this.state.secretKey):JSON.stringify({x:moveLeftDistance,y:5.0}),
                "token":this.state.backToken,
                clientUid: localStorage.getItem('slider'),
                ts: Date.now()
            }
            let captchaVerification = this.state.secretKey ? aesEncrypt(this.state.backToken+'---'+JSON.stringify({x:moveLeftDistance,y:5.0}),this.state.secretKey):this.backToken+'---'+JSON.stringify({x:moveLeftDistance,y:5.0})
            reqCheck(data).then(res=>{
                if (res.repCode === "0000") {

                    this.setState({
                        isEnd : true,
                        passFlag: true,
                        tipWords: `Succeed in ${((endMovetime-this.state.startMoveTime)/1000).toFixed(2)}s`
                    })
                    setTimeout(() => {
                        this.setState({tipWords: ""})
                        this.refresh();
                        // eslint-disable-next-line react/prop-types
                        this.props.onSuccess(captchaVerification)
                    }, 1000)
                } else {
                    this.setState({
                        isEnd: true,
                        moveBlockBackgroundColor: '#d9534f',
                        leftBarBorderColor: '#d9534f',
                        iconColor: '#fff',
                        iconClass: 'icon-close',
                        passFlag: false,
                        tipWords: res.repMsg || 'Failed'
                    })
                    setTimeout(() => {
                        this.refresh();
                        this.setState({
                            tipWords: ''
                        })
                    }, 1000);
                }
            }).catch(e => {
                console.log(e);
            })
            this.setState({status: false})
        }
    }

    closeBox = () => {
        this.props.verifyPointFixedChild(false)
    }

    render() {
        const { vSpace, barSize,transitionWidth,finishText,transitionLeft,imgSize, isSlideShow} = this.props;
        return (
          // 蒙层
          <div className="mask" style={{ display: isSlideShow ? 'block' : 'none' }}>
    <div className="verifybox" style={{ maxWidth: parseInt(imgSize.width) + 30 + 'px' }}>
      <div className='verifybox-top'>
        {"I'm not a robot."}
        <span className='verifybox-close' onClick={() => this.closeBox()}>
          <i className='iconfont icon-close'/>
        </span>
      </div>
      <div className='verifybox-bottom' style={{padding:'15px'}}>
        {/* 验证容器 */}
          <div style={{ position: 'relative' }} className='stop-user-select'>
          <div
            className='verify-img-out'
            style={{ height: parseInt(this.state.setSize.imgHeight) + vSpace }}
          >
            <div
              className='verify-img-panel'
              style={{ width: this.state.setSize.imgWidth, height: this.state.setSize.imgHeight }}
            >
              {this.state.backImgBase? <img
                src={'data:image/png;base64,' + this.state.backImgBase}
                alt=""
                style={{ width: '100%', height: '100%', display: 'block' }}
              />: <img
                src={defaultImg}
                alt=""
                style={{ width: '100%', height: '100%', display: 'block' }}
              />}
                <div
                  className='verify-refresh'
                  onClick={() => this.refresh()}
                >
                <i className='iconfont icon-refresh'/>
              </div>
              <CSSTransition in={this.state.tipWords.length > 0} timeout={150} classNames="tips" unmountOnExit>
                <span
                  className={
                      this.state.passFlag
                        ? `${'verify-tips'} ${'suc-bg'}`
                        : `${'verify-tips'} ${'err-bg'}`
                  }
                >
                  {this.state.tipWords}
                </span>
              </CSSTransition>
            </div>
          </div>

          <div
            className='verify-bar-area'
            style={{ width: this.state.setSize.imgWidth, height: barSize.height, lineHeight: barSize.height }}
            ref={(bararea) => this.setBarArea(bararea)}
          >
            <span className='verify-msg'>{this.state.text}</span>
            <div
              className='verify-left-bar'
              style={{
                  width: this.state.leftBarWidth !== undefined ? this.state.leftBarWidth : barSize.height,
                  height: barSize.height,
                  borderColor: this.state.leftBarBorderColor,
                  transaction: transitionWidth,
              }}
            >
              <span className='verify-msg'>{finishText}</span>

              <div
                className='verify-move-block'
                onTouchStart={(e) => this.start(e)}
                onMouseDown={(e) => this.start(e)}
                style={{
                    width: barSize.height,
                    height: barSize.height,
                    backgroundColor: this.state.moveBlockBackgroundColor,
                    left: this.state.moveBlockLeft,
                    transition: transitionLeft,
                }}
              >
                <i
                  className='verify-icon iconfont icon-right'
                  style={{ color: this.state.iconColor }}
                />
                <div
                  className='verify-sub-block'
                  style={{
                      width: Math.floor((parseInt(this.state.setSize.imgWidth) * 47) / 310) + 'px',
                      height: this.state.setSize.imgHeight,
                      top: '-' + (parseInt(this.state.setSize.imgHeight) + vSpace) + 'px',
                      backgroundSize: this.state.setSize.imgWidth + ' ' + this.state.setSize.imgHeight,
                  }}
                >
                  <img
                    src={'data:image/png;base64,' + this.state.blockBackImgBase}
                    alt=""
                    style={{ width: '100%', height: '100%', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
        )
    }
}

VerifySlideFixed.defaultProps = {
    mode: 'fixed',
    vSpace: 5,
    imgSize: {
        width: '310px',
        height: '200px',
    },
    barSize: {
        width: '310px',
        height: '40px',
    },
    setSize: {
        imgHeight: 200,
        imgWidth: 310,
        barHeight: 0,
        barWidth: 0,
    },
};
VerifySlideFixed.propTypes = {
    onSuccess: PropTypes.func.isRequired,
    vSpace: PropTypes.number,
    barSize: PropTypes.object,
    showRefresh: PropTypes.bool,
    transitionWidth: PropTypes.number,
    finishText: PropTypes.string,
    transitionLeft: PropTypes.string,
    imgSize: PropTypes.object,
    isSlideShow: PropTypes.bool,
    verifyPointFixedChild: PropTypes.func
}

export default VerifySlideFixed
