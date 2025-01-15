import HeaderBox from "@/components/header-box";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const HomePage = async () => {
  const isLogged = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={isLogged?.name}
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
