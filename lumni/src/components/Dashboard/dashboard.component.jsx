import { useState, useEffect, useContext } from "react";

/* Styles */
import {
  Container,
  ContainerRow,
  Column1,
  Column2,
  Title,
  Info,
  Chart,
  InsideColumn2,
  FilterRow,
  FilterHeader0,
  FilterHeader1,
  FilterHeader2,
  FilterColumn1,
  FilterColumn2,
  FilterColumn0,
} from "./dashboard.styles";

/* Material UI */
import makeStyles from "@mui/styles/makeStyles";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

/* Charts Library */
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Scrum", value: 400 },
  { name: "Grouwth Hacking", value: 300 },
  { name: "Google Design Sprint", value: 300 },
  { name: "FDD", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  styleTitle: {
    textAlign: "start",
    "@media (max-width: 759px)": {
      justifyContent: "center",
      textAlign: "center",
    },
  },
  progress: {
    height: 100,
    borderRadius: "10px",
    margin: "20px 10px",
  },
  progressText: {
    textAlign: "left",
    fontSize: "22px",
    fontWeight: 300,
    paddingLeft: 20,
    marginTop: -20,
    fontFamily: "Roboto",
    color: "#444446",
  },
  progressTextRight: {
    textAlign: "left",
    fontSize: "22px",
    fontWeight: 300,
    fontFamily: "Roboto",
    color: "#444446",
    paddingLeft: 20,
    marginTop: 9,
  },
  h3: {
    display: "inline-block",
    marginBottom: -10,
    marginTop: 10,
    paddingTop: 5,
    fontWeight: 500,
    color: "#444446",
    fontFamily: "Roboto",
    letterSpacing: "normal",
  },
  filtersField: {
    width: "auto",
  },
}));

export default function DashboardData() {
  const [progress, setProgress] = useState(0);
  const [dataChart, setDataChart] = useState([]);
  const classes = useStyles();
  return (
    <>
      {" "}
      <Container>
        {" "}
        <Title className={classes.styleTitle}>Dashboard</Title>{" "}
        <FilterRow>
          <FilterHeader0>Filtrar por Nível</FilterHeader0>
          <FilterColumn0>
            <Autocomplete
              // {...defaultPropsYear}
              id="year-selector"
              style={{ margin: "auto", width: "auto" }}
              autoSelect
              disableClearable
              className={classes.option}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
          </FilterColumn0>

          <FilterHeader1>Filtrar por Categoria</FilterHeader1>
          <FilterColumn1>
            <Autocomplete
              //   {...defaultPropsState}
              id="state-selector"
              style={{ margin: "auto", width: "auto" }}
              autoSelect
              className={classes.filtersField}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
          </FilterColumn1>

          <FilterHeader2>Filtrar por Usuário</FilterHeader2>
          <FilterColumn2>
            <Autocomplete
              // {...defaultPropsSa}
              id="sa-selector"
              autoSelect
              // disabled={selectedState?.uf ? false : true}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
            />
          </FilterColumn2>
        </FilterRow>
        <ContainerRow>
          <Column1>
            <div>
              <LinearProgressWithLabel
                className={classes.progress}
                value={progress}
              />
            </div>
            <div className={classes.progressText}></div>
          </Column1>
          <Column2>
            <InsideColumn2>
              <Info>
                {data.length >= 1 && (
                  <div className={classes.progressTextRight}>
                    <h3 className={classes.h3}>
                      {data.find((curr) => curr.status === "Aceita")
                        ? data.find((curr) => curr.status === "Aceita")
                            .countedProposals
                        : 0}
                    </h3>{" "}
                    questões respondidas. <br />
                    <h3 className={classes.h3}>
                      {data.reduce(
                        (acc, curr) => acc + curr.countedProposals,
                        0
                      )}
                    </h3>{" "}
                    questões registradas.
                  </div>
                )}
              </Info>
              <Chart>
                <PieChart width={180} height={180}>
                  <Pie
                    data={data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </Chart>
            </InsideColumn2>
          </Column2>
        </ContainerRow>
      </Container>
    </>
  );
}
