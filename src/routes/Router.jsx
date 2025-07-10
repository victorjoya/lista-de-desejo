import { useCallback, useState } from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import { Layout } from "../components/Layout/Layout";

export const Router = () => {
  const [search, setSearch] = useState("");

  const onSearch = useCallback((searchValue) => {
    setSearch(searchValue);
  });
  const onClear = useCallback(() => {
    setSearch("");
  });
  return (
    <Routes>
      <Route element={<Layout onClear={onClear} onSearch={onSearch} />}>
        <Route path="/lista-de-desejo" element={<App search={search} />} />
        <Route path="/lista-de-desejo/lista/:id" element={<listaDetail />} />
        <Route path="/*" element={<App search={search} />} />
      </Route>
    </Routes>
  );
};
