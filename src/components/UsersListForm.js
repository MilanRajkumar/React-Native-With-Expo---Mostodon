import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { actionGetUsersList } from '../actions';

import ListItem from './ListItem';
import SearchBar from './common/SearchBar';
import { filter } from 'lodash';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
class UsersListForm extends Component {
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  };
  componentWillMount() {
    this.props.actionGetUsersList()
    this.createDataSource(this.props)
  }
  componentWillReceiveProps(nextProps) {
    try {
      this.createDataSource(nextProps)
    } catch (e) {
      console.log("componentWillReceiveProps", e)
    }
  }
  createDataSource({usersList}) {
    if (!usersList) {
      this.setState({dataSource: ds.cloneWithRows([])})
    } else {
      this.setState({dataSource: ds.cloneWithRows(usersList)})
    }
  }
  searchByText(text) {
    /*Must hit the api but there is no api like search person by text so locally done here*/
    let data = filter(this.props.usersList, function(o) { return o.first_name.toLowerCase().includes(text); })
    this.setState({
       dataSource: ds.cloneWithRows(data)
     });
  }
  renderRow(data) {
    return <ListItem data = {data}/>
  }
  render () {
    return (
      <ListView
        enableEmptySections
        dataSource = { this.state.dataSource }
        renderRow = {(rowData) => this.renderRow(rowData)}
        renderSeparator=
        {
          (sectionId, rowId) =>
          <View key={rowId} style={styles.listSeparatorStyle}/>}
        renderHeader={() => <SearchBar onSearch = { this.searchByText.bind(this) }/>}
        />
    )
  }
}

const styles = {
  listSeparatorStyle: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E',
  }
}

const mapStateToProps = ({usersList}) => {
  return {usersList};
}

export default connect(mapStateToProps, {actionGetUsersList})(withRouter(UsersListForm));
