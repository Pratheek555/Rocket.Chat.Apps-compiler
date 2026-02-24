import pino from "pino";

const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    timestamp: pino.stdTimeFunctions.epochTime,
});

export default logger;
