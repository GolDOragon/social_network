import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  handleActivateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  handleDeactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  };

  handleChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({ state: this.props.state });
    }
  };

  render() {
    return (
      <div className={s.profileStatus}>
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.handleDeactivateEditMode}
              onDoubleClick={this.handleDeactivateEditMode}
              onChange={this.handleChangeStatus}
              type="text"
              value={this.state.status}
            />
          </div>
        )}
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.handleActivateEditMode}>
              {this.props.status || 'NO STATUS'}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
