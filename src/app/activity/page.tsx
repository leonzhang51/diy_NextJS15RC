'use client'

import ActivityLogs from '@/components/ActivityLogs/ActivityLogs'
import TabPage from '@/components/TabPage'

/**
 * Renders the Activity Logs page.
 *
 * @returns {React.ReactElement} The Activity Logs page.
 */
function ActivityLogsPage(): React.ReactElement {
  // eslint-disable-next-line react/jsx-filename-extension
  return (
    <TabPage
      label='Activity Log'
      comp={ActivityLogs}
      params={{ sku: '' }}
    />
  )
}

export default ActivityLogsPage
