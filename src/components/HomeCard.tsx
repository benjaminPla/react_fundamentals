import React from "react";

interface HomeCardProps {
  items: {
    title: string;
    checks: string[];
  }[];
}

const HomeCard: React.FC<HomeCardProps> = ({ items }) => {
  return (
    <div className="row" data-testid="row">
      {items.map((item, index) => (
        <div className="col-md-4 mb-4" key={index} data-testid="mainContainer">
          <div className="card h-100" data-testid="subContainer">
            <div className="card-body" data-testid="cardBody">
              <h3 className="card-title" data-testid="homeCardTitle">
                {item.title}
              </h3>
              <ul className="card-list" data-testid="ul">
                {item.checks.map((check, checkIndex) => (
                  <li className="card-item" key={checkIndex} data-testid="li">
                    <input
                      type="checkbox"
                      className="card-checkbox"
                      checked
                      disabled
                      data-testid="check"
                    />
                    {check}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
