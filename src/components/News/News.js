import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSearchForm from './NewsSearchForm';

axios.defaults.headers.common['Authorization'] =
  'Bearer 2b5ed3001d5444a9a22dc7ccc959582e';

const APIfetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then(response => response.data.articles);
};

export default function News() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

// Пофиксить цикличность useEffect
  useEffect(() => {
    const fetchArticles = () => {
      setIsLoading(true);

    APIfetchArticles({searchQuery: query, currentPage}).then({ searchQuery: query, currentPage })
      .then(responseArticles => {
        setArticles(prevArticles => [...prevArticles, ...responseArticles]);
        setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
    }

    fetchArticles()
  }, [currentPage, query]);

  const onChangeQuery = query => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
  };

  return (
    <>
      {error && <h1>Ой ошибка, всё пропало!!!</h1>}

      <NewsSearchForm onSubmit={onChangeQuery} />
      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

//   import { Component } from 'react';

// export default class News extends Component {
//   state = {
//     articles: [],
//     currentPage: 1,
//     searchQuery: '',
//     isLoading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchArticles();
//     }
//   }

//   onChangeQuery = query => {
//     this.setState({
//       searchQuery: query,
//       currentPage: 1,
//       articles: [],
//       error: null,
//     });
//   };

// fetchArticles = () => {
//   const { currentPage, searchQuery } = this.state;
//   const options = { searchQuery, currentPage };

//   this.setState({ isLoading: true });

//   fetchArticles(options)
//     .then(articles => {
//       this.setState(prevState => ({
//         articles: [...prevState.articles, ...articles],
//         currentPage: prevState.currentPage + 1,
//       }));
//     })
//     .catch(error => this.setState({ error }))
//     .finally(() => this.setState({ isLoading: false }));
// };

//   render() {
//     const { articles, isLoading, error } = this.state;
//     const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

//     return (
// <div>
//   {error && <h1>Ой ошибка, всё пропало!!!</h1>}

//         <NewsSearchForm onSubmit={this.onChangeQuery} />

// <ul>
//   {articles.map(({ title, url }) => (
//     <li key={title}>
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         {title}
//       </a>
//     </li>
//   ))}
// </ul>

// {shouldRenderLoadMoreButton && (
//   <button type="button" onClick={this.fetchArticles}>
//     Загрузить ещё
//   </button>
// )}

// {isLoading && (
//   <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
//     Загружаем...
//     <span
//       aria-label="Иконка"
//       role="img"
//       style={{ fontSize: 32, marginLeft: 10 }}
//     >
//       🧙‍♂️
//     </span>
//   </p>
//         )}
//       </div>
//     );
//   }
// }
