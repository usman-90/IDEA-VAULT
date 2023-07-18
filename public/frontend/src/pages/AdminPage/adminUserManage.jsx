
import "./manage.css";
const AdminManage = ({ users}) => {
  return (
    <div className="container">
      <h1 className="adminheading_z">User Manage</h1> <br />
      <table className="tablemanage_z"  border="4">
        <thead className="headeradmin_z">
          <tr className="rowadmin">
            <th className="datadmin_z">User Name</th>
            <th className="datadmin_z">First Name</th>
            <th className="datadmin_z">Last Name</th>
            <th className="datadmin_z">Email</th>
            <th className="datadmin_z">Contact</th>
            <th className="datadmin_z">UserId</th>
            <th className="datadmin_z">Operation</th>
            

          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="rowadmin">
              <td className="datadmin_z">
                {user.username}
              </td>
              <td className="datadmin_z">
                {user.firstname}
              
              </td>
              <td className="datadmin_z">
                {user.lastname}
              </td>
              <td className="datadmin_z">
                {user.email}
              </td>
              <td className="datadmin_z">
                {user.contact}
              </td>
              <td className="datadmin_z">
                {user.userid}
              </td>
              <td className="datadmin_z">
                <button className="handle_z">Edit</button>
                <button className="handle_z">Delete</button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
};
export default AdminManage;