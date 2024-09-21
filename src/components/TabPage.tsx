import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'

type TabPageProps = {
  label: string
  comp: React.ComponentType<any>
  params: {
    sku: string
  }
}

function TabPage({ label, comp: Comp, params }: TabPageProps) {
  return (
    <Container
      sx={{ mt: 4 }}
      maxWidth={false}
    >
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
        >
          <Typography
            align='center'
            variant='h5'
            style={{
              fontSize: '28px',
              fontWeight: '600',
              textAlign: 'left',
              margin: '0px 0px 15px 0px'
            }}
          >
            {label}
          </Typography>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
          <Box
            sx={{
              height: '100%',
              '& .qst-table--header': {
                backgroundColor: '#F5F5F5'
              }
            }}
          >
            <Comp params={params} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default TabPage
