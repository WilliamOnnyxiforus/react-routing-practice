import { Fragment } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMYY_QUOTES = [
  {
    id: "q1",
    author: "Wil",
    text: "Learning react is fun!",
  },
  {
    id: "q2",
    author: "William",
    text: "Learning react is great!",
  },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  // console.log(match);

  const quote = DUMYY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
