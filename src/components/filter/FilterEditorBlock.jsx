import React from 'react'
import Button from '../Button'
import DeleteIcon from 'react-icons/lib/md/delete'

class FilterEditorBlock extends React.Component {
  static propTypes = {
    onDelete: React.PropTypes.func.isRequired,
    children: React.PropTypes.element.isRequired,
  }

  render() {
    return <div className="maputnik-filter-editor-block">
      <div className="maputnik-filter-editor-block-action" style={{display: 'inline-block', width: '8%'}}>
        <Button
          style={{backgroundColor: null}}
          onClick={this.props.onDelete}
        >
          <DeleteIcon />
        </Button>
      </div>
      <div className="maputnik-filter-editor-block-content" style={{display: 'inline-block', width: '92%'}}>
        {this.props.children}
      </div>
    </div>
  }
}

export default FilterEditorBlock
