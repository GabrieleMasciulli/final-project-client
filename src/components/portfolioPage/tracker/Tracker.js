import React, { useEffect, useState } from 'react'
import Assets from './Assets'
import portfolioService from '../../../services/portfolio.service'
import authService from '../../../services/auth.service'

const Tracker = () => {
  const user = authService.getCurrentUser()
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(false)

  console.log('Assets: ', assets)

  const getAssets = () => {
    setLoading(true)
    portfolioService.getPositions(user.id).then(assets => {
      setAssets(assets)
      setLoading(false)
    })
  }

  useEffect(getAssets, [])

  return (
    <div className='tracker-wrapper'>
      <div className='chart-balance-wrapper'></div>
      <Assets loading={loading} assets={assets} />
    </div>
  )
}

export default Tracker