import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RootLayout from "./RootLayout.jsx"
import Income from "./Income.jsx"
import Expenses from "./Expenses.jsx"
import Investments from "./Investments.jsx"
import Sms from "./Sms.jsx"
import Settings from "./Settings.jsx"
import IncomeLayout from "./IncomeLayout.jsx"
import FiatIncome, { fiatLoader } from "./FiatIncome.jsx"
import CryptoIncome, { cryptoLoader } from "./CryptoIncome.jsx"
import TotalIncome from "./TotalIncome.jsx"
import ExpensesLayout from "./ExpensesLayout.jsx"
import FiatExpenses, { fiatExpensesLoader } from "./FiatExpenses.jsx"
import CryptoExpenses, { cryptoExpensesLoader } from "./CryptoExpenses.jsx"
import TotalExpenses from "./TotalExpenses.jsx"
import InvestmentsLayout from "./InvestmentsLayout.jsx"
import FiatInvestments, { fiatInvestmentsLoader } from "./FiatInvestments.jsx"
import CryptoInvestments, { cryptoInvestmentsLoader } from "./CryptoInvestments.jsx"
import TotalInvestments from "./TotalInvestments.jsx"
import SmsLayout from "./SmsLayout.jsx"
import Profile from "./Profile.jsx"
import Notifications from "./Notifications.jsx"
import Preferences from "./Preferences.jsx"
import Integrations from "./Integrations.jsx"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

        {/* Income */}
        <Route path="/" element={<IncomeLayout />}>

          <Route index element={<FiatIncome />} loader={fiatLoader} />

          <Route path="fiat" element={<FiatIncome />} loader = {fiatLoader} />

          <Route index element={<CryptoIncome />} loader = {cryptoLoader} />
          
          <Route path="crypto" element={<CryptoIncome />} loader = {cryptoLoader} />

          <Route path="total" element={<TotalExpenses />}/>

        </Route>

        {/* Expenses */}
        <Route path="expenses" element={<ExpensesLayout />}>

        <Route index element={<FiatExpenses />} loader = {fiatExpensesLoader} />

        <Route path="fiat" element={<FiatExpenses />} loader = {fiatExpensesLoader} />

        <Route index element={<CryptoExpenses />} loader = {cryptoExpensesLoader} />

        <Route path="crypto" element={<CryptoExpenses />} loader = {cryptoExpensesLoader} />

        <Route path="total" element={<TotalExpenses />} />

        </Route>

        {/* Sms */}
        <Route path="sms" element={<SmsLayout />}>

        <Route index element={<Sms />} />

        </Route>

        {/* Investments */}
        <Route path="investments" element={<InvestmentsLayout />}>

        <Route index element={<FiatInvestments />} loader={fiatInvestmentsLoader} />

        <Route path="fiat" element={<FiatInvestments />} loader={fiatInvestmentsLoader} />

        <Route index element={<CryptoInvestments />} loader={cryptoInvestmentsLoader} />

        <Route path="crypto" element={<CryptoInvestments />} loader={cryptoInvestmentsLoader} />

        <Route path="total" element={<TotalInvestments />} />

        </Route>

        {/* Settings */}
        <Route path="settings" element={<Settings />}>
        
        <Route path="profile" element={<Profile />} />
        <Route path="notification" element={<Notifications />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="integrations" element={<Integrations />} />
        
        </Route>
    </Route>
  ))

  return (
      <RouterProvider router={router}/>
  )
}

export default App
