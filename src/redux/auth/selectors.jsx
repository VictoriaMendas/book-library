import { useSelector } from "react-redux";

export const isLoading = useSelector((state) => state.books.isLoading);

export const error = useSelector((state) => state.books.error);
