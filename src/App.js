import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const HistoryList = props => {
  const {eachHistoryItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryItem

  const OnDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="each-history-item">
      <p className="time-accessed-label"> {timeAccessed}</p>
      <div className="history-details-container">
        <img src={logoUrl} className="logo-img" alt="domain logo" />
        <div className="title-url-history-details-container">
          <p className="title-label"> {title}</p>
          <p className="domain-url-label"> {domainUrl}</p>
        </div>
        <button
          type="button"
          onClick={OnDeleteHistory}
          className="delete-button"
          testid="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  searchHistory = event => {
    const inputSearchHistory = event.target.value
    this.setState({searchInput: inputSearchHistory})
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({historyList: filteredList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const filteredHistoryList = historyList.filter(eachHistory => {
      const historyTitleInLower = eachHistory.title.toLowerCase()

      if (
        historyTitleInLower.includes(searchInput) ||
        eachHistory.title.includes(searchInput)
      ) {
        return true
      }
      return false
    })

    return (
      <div className="browser-history-bcg-container">
        <div className="input-history-header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-website-logo"
            alt="app logo"
          />
          <div className="input-search-history-container">
            <div className="search-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
            </div>
            <input
              type="search"
              className="search-history-input-element"
              placeholder="Search History"
              onChange={this.searchHistory}
            />
          </div>
        </div>
        <div className="browser-history-list-bcg-container">
          {filteredHistoryList.length !== 0 && (
            <ul className="browser-history-list-container">
              {filteredHistoryList.map(eachHistoryItem => (
                <HistoryList
                  eachHistoryItem={eachHistoryItem}
                  deleteHistory={this.deleteHistory}
                  key={eachHistoryItem.id}
                />
              ))}
            </ul>
          )}
          {filteredHistoryList.length === 0 && (
            <p className="no-history-to-show-text">
              {' '}
              There is no history to show{' '}
            </p>
          )}
        </div>
      </div>
    )
  }
}

const App = () => <BrowserHistory />

export default App
