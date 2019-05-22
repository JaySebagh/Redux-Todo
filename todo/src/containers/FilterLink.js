import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
// importing action setVisibilityFilter

const mapStateToProps = (state, ownProps) => ({
    // setting active prop to visibilityFilter from store
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // onclick prop equal to the dispatch call with filter value as the argument
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
// when you clikc the button, the onClick gets called which dispatches the setVisibilityFilter

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)