import "./pagination.css"


const Pagination = ({ currentPage, totalPage = 10, onPageChange }) => {

    function generateTotalPages() {
        const pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i)
        }
        return pages;
    }

    return (
        <div className="pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn">Prev</button>
            {
                generateTotalPages().map((pageNo) => (
                    <button key={pageNo} className={currentPage=== pageNo ?"pagination-btn-active" : "pagination-btn"} onClick={() => onPageChange(pageNo)}>{pageNo}</button>
                ))
            }
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === 10}
                className="pagination-btn">next</button>
        </div>
    );
};

export default Pagination;