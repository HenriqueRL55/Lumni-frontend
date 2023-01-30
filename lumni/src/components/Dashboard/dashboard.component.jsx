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
    InsideColumnChart,
    InsideColumnFilter,
    LevelFilter,
    UserFilter,
    Character,
    Chart2,
} from "./dashboard.styles";

/* Material UI */
import makeStyles from "@mui/styles/makeStyles";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import FaceIcon from "@mui/icons-material/Face";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
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
import api from "../../services/api";

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
                <Typography
                    variant="body2"
                    color="textSecondary"
                >{`${Math.round(props.value)}%`}</Typography>
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
        width: "50%",
        margin: 12,
        fontSize: 15,
    },
    styleTitle: {
        textAlign: "start",
        "@media (max-width: 759px)": {
            justifyContent: "center",
            textAlign: "center",
        },
    },

    progressTextRight: {
        textAlign: "left",
        fontSize: "22px",
        fontWeight: 300,
        fontFamily: "Roboto",
        color: "#444446",
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
}));

const themenome = [
    { name: "Scrum", value: 1 },
    { name: "FDD", value: 2 },
    { name: "Grouwth Hacking", value: 3 },
    { name: "Google Design Sprint", value: 4 },
];

const teste = {
    "numberOfQuestionsByThemes": [
        {
            "theme": 1,
            "questions": "12"
        },
        {
            "theme": 2,
            "questions": "6"
        }
    ],
    "total": 2
}

export default function DashboardData() {
    const [progress, setProgress] = useState(0);
    const [dataChart, setDataChart] = useState([]);
    const classes = useStyles();
    const [grafico,setgrafico] = useState([])
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [playerData, setPlayerData] = useState({});


    useEffect(() => {
        async function data () {
            const { data } = await api.get("/numberOfQuestionsByThemes");
            const dados = data.numberOfQuestionsByThemes.map((dados) => {
                return (
                    {
                        name: themenome[dados.theme - 1].name,
                        value: parseInt(dados.questions)
                    }
                )
            })
            setTotalQuestions(data.total)
            setgrafico(dados)
        }
        data()
    }, []);

    useEffect(() => {
        async function data () {        
            const id = JSON.parse(localStorage.getItem("user")).id;  
            const player = await api.get(`/findUser/${id}`);
            const { data } = await api.get(`/answersByPlayer/${player.data.player[0].id}`);
            console.log(data)
            setPlayerData(data);
        }
        data()
    }, []);

    return (
        <>
            {" "}
            <Container>
                {" "}
                <Title className={classes.styleTitle}>Dashboard</Title>{" "}
                <ContainerRow>
                    <Column1>
                        <InsideColumnChart>
                            <Info>
                                {data.length >= 1 && (
                                    <div className={classes.progressTextRight}>
                                        <h3 className={classes.h3}>
                                            {playerData.correctAnswers + playerData.wrongAnswers ? playerData.correctAnswers + playerData.wrongAnswers : "0"}
                                        </h3>{" "}
                                        questões respondidas. <br />
                                        <h3 className={classes.h3}>
                                            {totalQuestions}
                                        </h3>{" "}
                                        questões registradas.
                                        
                                        <br />
                                        <h3 className={classes.h3}>
                                            {playerData.average ? playerData.average : "0"}
                                        </h3>{" "}
                                        média de acertos.
                                    </div>
                                )}
                            </Info>
                            <Chart>
                                <PieChart width={180} height={180}>
                                    <Pie
                                        data={grafico}
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {grafico.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </Chart>
                        </InsideColumnChart>
                    </Column1>
                    <Column2>
                        <Character>
                            { playerData.score >= 80 ? (
                                <TagFacesIcon/>
                            ) : playerData.score <= 79 && playerData.score >=50 ? (
                                <SentimentVeryDissatisfiedIcon />
                            ) : playerData.score <=49 ? ( <FaceIcon/>) : null
                            }
                        </Character>
                        <Chart2>Seu nível de jogador é {playerData.player_level}</Chart2>
                    </Column2>
                </ContainerRow>
            </Container>
        </>
    );
}
