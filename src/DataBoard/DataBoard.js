import "./DataBoard.scss";

import { useEffect, useState } from "react";

import axios from "axios";

import moment from "moment/moment";

function DataBoard() {
	const [dataCovid, setDataCovid] = useState([]);
	const [isLoadings, setIsLoadings] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			async function fetchData() {
				try {
					let res = await axios.get(
						"https://api.covid19api.com/country/viietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
					);
					console.log(res);
					let data = res && res.data ? res.data : [];
					if (data && data.length > 0) {
						data.map((item) => {
							item.Date = moment(item.Date).format("DD/MM/YYYY");

							return item;
						});
					}
					setDataCovid(data);
					setIsLoadings(false);
					setIsError(false);
				} catch (e) {
					setIsError(true);
					setIsLoadings(false);
					alert(e.message);
				}
			}
			fetchData();
		}, 3000);
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
