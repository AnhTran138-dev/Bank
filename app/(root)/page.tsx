import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/total-balance";
import React from "react";

const HomePage = () => {
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
          <TotalBalanceBox />
        </header>
      </div>
    </section>
  );
};

export default HomePage;
