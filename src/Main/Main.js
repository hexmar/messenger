import React from 'react';
import './main-style.css';
import SalesStatisticsTile from './SalesStatisticsTile/SalesStatisticsTile';
import WorkingShiftTile from './WorkingShiftTile/WorkingShiftTile';
import MyTradingPointTile from './MyTradingPointTile/MyTradingPointTile';
import MyPeopleTile from './MyPeopleTile/MyPeopleTile';
import TodaySalesTile from './TodaySalesTile/TodaySalesTile';
import MyMonthlyIncomeTile from './MyMonthlyIncomeTile/MyMonthlyIncomeTile';
import NewSale from '../popups/NewSale/NewSale';
import { DateRangePicker } from '../UI kit/dateRangePicker/DateRangePicker';
import { CompactInput } from '../UI kit/compactInput/CompactInput';
import Input from '../UI kit/fields/Input';
import { SearchIcon } from '../icons/SearchIcon';
import { DateRangePickerHeader } from '../UI kit/dateRangePicker/DateRangePickerHeader/DateRangePickerHeader';
import { MonthPickerForRange } from '../UI kit/dateRangePicker/MonthPickerForRange/MonthPickerForRange';

class Main extends React.Component {
	render() {
		return (
			<main>
				<div className='grid-wrapper'>
					<SalesStatisticsTile />

					<WorkingShiftTile />

					<MyTradingPointTile />

					<MyPeopleTile 
						title={"Мой координатор"} 
						fullName={"Петр Данилов"}
						tel={"+7 921 333 44 55"}
						email={"petyapetrov@mail.ru"}
					/>

					<MyPeopleTile 
						title={"Мой супервайзер"} 
						fullName={"Валерия Петрова"}
						tel={"+7 921 333 44 56"}
						email={"petrova@mail.ru"}
					/>

					<TodaySalesTile />

					<MyMonthlyIncomeTile />
				</div>
				<NewSale />

				{/*<DateRangePicker/>
				 <DateRangePickerHeader/>
				<MonthPickerForRange /> */}
			</main>
		);
	}
}

export default Main;