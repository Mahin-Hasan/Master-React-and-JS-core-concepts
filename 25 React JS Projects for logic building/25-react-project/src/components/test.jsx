import { useState } from 'react';
import Pagination from '.';

const PaginationTest = () => {

    const fakeData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`
    }))
    // console.log(fakeData);

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    function handlePageChange(currentPage){
        setCurrentPage(currentPage)
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentListOfItems = fakeData.slice(indexOfFirstItem,indexOfLastItem)

    console.log(currentListOfItems);

    return (
        <div>
            <h2>Pagination</h2>
            <ul className='list-items'>
                {currentListOfItems.map((listItem)=>(
                    <li key={listItem.id}>{listItem.name}</li>
                ))}
            </ul>
            <Pagination
            currentPage={currentPage}
            totalPage={Math.ceil(fakeData.length / itemsPerPage)}
            onPageChange={handlePageChange}
            />
        </div>
    );
};

export default PaginationTest;