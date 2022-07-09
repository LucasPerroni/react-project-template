import { BrowserRouter, Routes, Route } from "react-router-dom"

import Example from "./Example"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example />}/>
        <Route path="*" element={<h1>This page doesn't exist...</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
