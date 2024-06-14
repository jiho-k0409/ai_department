const FacultyList = ({ faculty, onEdit, onDelete,onAdd }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Name</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Position</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>{faculty.map((member)=>{return (
          <tr key={member.kor}>
          <td className="px-6 py-4 border-b border-gray-300">{member.kor}</td>
          <td className="px-6 py-4 border-b border-gray-300">{member.position}</td>
          <td className="px-6 py-4 border-b border-gray-300">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              value={member.kor}
              onClick={onEdit}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              value={member.kor}
              onClick={onDelete}
            >
              Delete
            </button>
          </td>
        </tr>
        )})}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="text-center">
              <button onClick={onAdd} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Add</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default FacultyList;
