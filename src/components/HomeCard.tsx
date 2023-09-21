import React from "react";

interface HomeCardProps {
  items: {
    title: string;
    checks: string[];
  }[];
}

const HomeCard: React.FC<HomeCardProps> = ({ items }) => {
  return (
    <div className="row">
      {items.map((item, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <ul className="card-list">
                {item.checks.map((check, checkIndex) => (
                  <li className="card-item" key={checkIndex}>
                    <input
                      type="checkbox"
                      className="card-checkbox"
                      checked
                      disabled
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
