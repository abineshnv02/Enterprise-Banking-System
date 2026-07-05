import DashboardCards from "../components/DashboardCards";
import RecentCustomers from "../components/RecentCustomers";
import CustomerGrowthChart from "../components/CustomerGrowthChart";

function Dashboard() {

    return (

        <div className="container mt-4">

            <h2 className="mb-4">

                Secure Ledger CRM Dashboard

            </h2>

            <DashboardCards />
            <CustomerGrowthChart />
            <RecentCustomers />

        </div>

    );

}

export default Dashboard;