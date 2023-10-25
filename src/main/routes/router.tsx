import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MakeBarbecueCreatePage, MakeBarbecueDetailsPage, MakeHomePage } from '@/main/factories/pages'

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeHomePage />} />
         <Route path="/barbecue/create" element={<MakeBarbecueCreatePage />} />
         <Route path="/barbecue/:barbecueId/details" element={<MakeBarbecueDetailsPage />} />
        <Route path="*" element={<MakeHomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
