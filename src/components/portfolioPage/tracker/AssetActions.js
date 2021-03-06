import React from 'react'
import Tippy from '@tippyjs/react'

// import 'tippy.js/dist/tippy.css'
import {
  faPlus,
  faEllipsisV,
  faHistory,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { showDeletionPanel } from '../../../reducers/positions'

const TippyContent = ({ onDelete }) => {
  return (
    <div className='actions-dropdown-content'>
      <button className='actions-dropdown-btn'>
        <span>
          <FontAwesomeIcon icon={faHistory} />
        </span>
        Transactions
      </button>
      <button className='actions-dropdown-btn' onClick={onDelete}>
        <span>
          <FontAwesomeIcon icon={faTrash} />
        </span>
        Remove asset
      </button>
    </div>
  )
}

const AssetActions = ({ assetId }) => {
  const dispatch = useDispatch()

  return (
    <div className='asset-actions'>
      <button className='add-trade-btn'>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <Tippy
        trigger='click'
        interactive='true'
        className='actions-dropdown'
        arrow={true}
        allowHTML='true'
        placement='bottom'
        content={
          <TippyContent onDelete={() => dispatch(showDeletionPanel(assetId))} />
        }
      >
        <div className='asset-options'>
          <button className='asset-options-btn'>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </div>
      </Tippy>
    </div>
  )
}

export default AssetActions
