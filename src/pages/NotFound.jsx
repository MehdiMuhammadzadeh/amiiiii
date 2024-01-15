import "./NotFound.css";

const NotFound = () => {
  return (
   <div className="error-page">
     <div className="error-container">
      <div className="content">
        <h1 data-text="404">404</h1>
        <h4 data-text="Oops! Page not found">Oops! Page not found</h4>
        <p>
          Sorry, the page you are looking for doesnt exist. to return home push
          the below button
        </p>
        <div className="return-home">
          <button>return home</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default NotFound;
