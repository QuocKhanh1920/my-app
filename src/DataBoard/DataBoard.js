import "./DataBoard.scss";

import { useEffect, useState } from "react";

import axios from "axios";

import moment from "moment/moment";

function DataBoard() {
	const [dataCovid, setDataCovid] = useState([]);
	const [loadings, setLoadings] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			async function fetchData() {
				let res = await axios.get(
					"https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
				);
				let data = res && res.data ? res.data : [];
				if (data && data.length > 0) {
					data.map((item) => {
						item.Date = moment(item.Date).format("DD/MM/YYYY");

						return item;
					});
				}
				setDataCovid(data);
				setLoadings(false);
			}
			fetchData();
		}, 1000);
	}, []);
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
				{loadings === false &&
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
				
				{loadings === true && <tr><td colSpan='5' style={{textAlign: 'center'}}>Loading ...</td></tr>}
			</tbody>
		</table>
	);
}

export default DataBoard;
