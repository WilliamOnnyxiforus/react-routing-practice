import QuoteList from '../components/quotes/QuoteList';

const DUMYY_QUOTES = [
  {
    id: 'q1',
    author: 'Wil',
    text: 'Learning react is fun!'
  },
  {
    id: 'q2',
    author: 'William',
    text: 'Learning react is great!'
  }
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMYY_QUOTES} />;
};

export default AllQuotes;
