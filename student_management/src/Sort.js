const Sort = () => {
    return ( 
        <div className="sortList">
            <select>
                <option>sort name A->Z</option>
                <option>sort name Z->A</option>
                <option>sort GPA descending</option>
                <option>sort GPA ascending</option>
            </select>
        </div>
     );
}
 
export default Sort;