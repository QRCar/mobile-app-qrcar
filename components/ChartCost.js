import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text, Rect } from 'react-native-svg'

export default function ChartCost(){
	
	const HEIGHT = 200
	const datas = {
		values:[ 10, 5, 50, 15, 20 ],
		labels:[ "January", "February", "March", "April", "May" ]
	}
	
	//const data =  datas.values
	const label = datas.labels

    const CUT_OFF = Math.max(datas.values)

    const Labels = ({ x, y, bandwidth, data }) => (
        data.map((value, index) => (
            <>
            	<Rect
				x={x(index)}
				y={y(value) - 5 } // Subtract Height / 2 to make half of the Rect above the bar
				rx={5} // Set to Height / 2
				ry={5} // Set to Height / 2
				width={bandwidth}
				height={10} // Height of the Rect
				fill={'rgba(164, 118, 239, 1)'}
				/>

				<Text
				key={ `${index}_${label[index]}` }
				x={ x(index) + (bandwidth / 2) }
				y={ HEIGHT-20 }
				fontSize={ 14 }
				fill={ '#999999' }
				alignmentBaseline={ 'middle' }
				textAnchor={ 'middle' }
				>
				{label[index]}
				</Text>

            <Text
                key={ index }
                x={ x(index) + (bandwidth / 2) }
                y={ y(value)-13 }
                fontSize={ 14 }
                fill={ '#333332' }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
            >
                {value}
            </Text>
            </>
        ))
    )

    return (
        <View style={{ flexDirection: 'row', height: HEIGHT, paddingVertical: 5 }}>
            <BarChart
                style={{ flex: 1 }}
                data={datas.values}
                svg={{ fill: 'rgba(164, 118, 239, 1)', animate:'true' }}
                contentInset={{ top: 20, bottom: 35 }}
                spacing={0.2}
                spacingInner={0.20}
                spacingOuter={0.07}

            >
                <Labels/>
                {/*<Grid direction={Grid.Direction.HORIZONTAL}/>*/}
            </BarChart>
        </View>
    )
}