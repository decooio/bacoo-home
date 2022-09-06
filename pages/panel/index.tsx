import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/panel/fileManager");
  }, []);
  return null;
};
export default Index;
