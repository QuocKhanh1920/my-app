import "./DataBoard.scss";

import moment from "moment";

import useFetch from "../Customize/useFetch";

function DataBoard() {
	const today = new Date(new Date().setHours(0, 0, 0, 0));
	const previousDay = moment().subtract(30, 'days'); 
	const {data: dataCovid, isLoadings, isError } = useFetch(`https://api.covid19api.com/country/vietnam?from=${today.toISOString()}&to=${previousDay.toISOString()}`)
	
	return (
		<table>
			{console.log("data: ", dataCovid)}
			<thead>
				<tr>
					<td>Date</td>
					<th>Confirmed</th>
					<th>Deaths</th>
					<th>Recovered</th>
					<th>Active</th>
				</tr>
			</thead>
			<tbody>
				{isError === false &&
					isLoadings === false &&
					dataCovid &&
					dataCovid.length > 0 &&
					dataCovid.map((item) => {
						return (
							<tr key={item.ID}>
								<td>{item.Date}</td>
								<td>{item.Confirmed}</td>
								<td>{item.Deaths}</td>
								<td>{item.Recovered}</td>
								<td>{item.Active}</td>
							</tr>
						);
					})}

				{isLoadings === true && (
					<tr>
						<td colSpan="5" style={{ textAlign: "center" }}>
							Loading ...
						</td>
					</tr>
				)}

				{isError === true && (
					<tr>
						<td colSpan="5" style={{ textAlign: "center" }}>
							Something wrongs ...
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}

export default DataBoard;
