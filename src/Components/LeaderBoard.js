import React from "react";
import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  return (
    <div className="table-leader">
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <img
                    className="avatar-leader"
                    src={user.avatarURL}
                    alt={`avatar of ${user.id}`}
                  ></img>
                  <span>{user.name}</span>
                  <p>{user.id}</p>
                </td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users).sort(
      (a, b) =>
        Object.values(b.answers).length - Object.values(a.answers).length
    ),
  };
};

export default connect(mapStateToProps)(Leaderboard);
