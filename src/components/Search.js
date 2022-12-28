import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Search = ({ data, setSearch }) => {
    const inputRef = useRef(null);
    const handleSearch = (e) => {
        if (e.target.value.trim().length === 0) return setSearch(data);
        const postArray = data.filter((post) => (
            post.title.toLowerCase().includes(e.target.value.toLowerCase().replace(/\s+/g, ' ').trim()) || post.body.toLowerCase().includes(e.target.value.toLowerCase().replace(/\s+/g, ' ').trim())
        ));
        setSearch(postArray);
    }
    return (
        <header>
            <div className="col-lg-8 mx-auto mt-4">
                <form onSubmit={(e) => { e.preventDefault() }} className='form'>
                    <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4 overflow-hidden">
                        <div className="input-group">
                            <input
                                type="text"
                                onChange={(e) => { handleSearch(e) }}
                                className='form-control form-control border-0 bg-light'
                                placeholder="What're you searching for?"
                                ref={inputRef}
                                autoFocus={true}
                            />

                            <div className="input-group-append">
                                <button
                                    onClick={() => { inputRef.current.focus() }}
                                    className='btn btn-link text-primary'
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Search