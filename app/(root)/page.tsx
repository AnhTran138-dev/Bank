import HeaderBox from "@/components/header-box";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance";
import React from "react";

const HomePage = () => {
  const isLogged = { firstName: "John", lastName: "Doe" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user="John Doe"
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1260.34}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar user={isLogged} transactions={[]} banks={[]} />
    </section>
  );
};

export default HomePage;
