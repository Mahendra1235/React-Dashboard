import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import { AreaChart,} from './AreaChart';
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';
import { ColumnChart } from './Telivision';
import { LineChart } from './Print';
import { GeoChart } from './Liveevents';
import slugs from 'resources/slugs';
import { convertSlugToUrl } from 'resources/utilities';
import { useHistory } from 'react-router-dom';
import Login from './Login';

const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    flexdir: {
        display:"flex",
        flexDirection:"row"
    }
    
  
    }
);


function DashboardComponent() {
    const { push } = useHistory();
    const classes = useStyles();
    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }
    return (
        <div>
            <Row>
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Total business in Cr'
                        value='12405'
                        onClick={() => onClick(slugs.business)}
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='High Volume drivers'
                        value='Television'
                        onClick={() => onClick(slugs.telivision)}
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='High Growth sector'
                        value='Live Events'
                        onClick={() => onClick(slugs.liveevents)}
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Low Growth Sector'
                        value='Print'
                        onClick={() => onClick(slugs.print)}
                    />
                </Row>
                
            </Row>
            <div class="row">
                <div class="col" style={{ padding: '20px',margin: '10px',borderRadius: '10px',backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                    <AreaChart/>
                    </div>
                    <div class="col"style={{ padding: '20px',margin: '10px',borderRadius: '10px',backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                   <PieChart/>
                    </div>
             </div>
             <div class="row"style={{ padding: '20px',margin: '10px',borderRadius: '10px',backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                    <BarChart/>
                </div>
        </div>
    );
}

export default DashboardComponent;
