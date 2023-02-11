import React, { useEffect } from "react";
import { checkIfLoggedIn, setIsLoggedIn } from "../features/account/accountSlice";
import { useAppDispatch } from "../store/hook";

export default function Wrapper({ children }: { children: JSX.Element }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkIfLoggedIn())
    const token = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_JWT!)!);
    if (!token) dispatch(setIsLoggedIn(false));
    else dispatch(setIsLoggedIn(true));
  }, []);

  return <>{children}</>;
}
