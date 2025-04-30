import React, { useState, useEffect, useRef } from 'react'
import './SearchBar.css'
import logo from '../assets/logo.jpg'

const SearchBar = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const inputRef = useRef(null)

    const handleSearchFocus = () => {
        setIsExpanded(true)
    }

    const handleSearchBlur = (e) => {
        // Don't collapse if clicking inside the search container
        if (e.relatedTarget && e.relatedTarget.closest('.search-container')) {
            return
        }
        if (!searchQuery) {
            setIsExpanded(false)
        }
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleClose = () => {
        setSearchQuery('')
        setIsExpanded(false)
        inputRef.current?.blur()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            handleClose()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle search submission here
        console.log('Searching for:', searchQuery)
    }

    // Focus input when expanded
    useEffect(() => {
        if (isExpanded) {
            inputRef.current?.focus()
        }
    }, [isExpanded])

    return (
        <>
            {isExpanded && (
                <div className="search-overlay" onClick={handleClose}></div>
            )}
            <div className={`search-container ${isExpanded ? 'expanded' : ''}`}>
                <form onSubmit={handleSubmit} className="search-bar">
                    <img src={logo} alt="Logo" className="search-logo" />
                    <div className="search-input-wrapper">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search our collection"
                            className="search-input"
                            onFocus={handleSearchFocus}
                            onBlur={handleSearchBlur}
                            onKeyDown={handleKeyDown}
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        {searchQuery && (
                            <button type="button" className="clear-button" onClick={handleClose}>
                                ×
                            </button>
                        )}
                    </div>
                    <button type="submit" className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </form>
            </div>
        </>
    )
}

export default SearchBar 