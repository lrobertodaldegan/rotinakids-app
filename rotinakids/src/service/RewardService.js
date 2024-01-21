import CacheService from "./CacheService";
import { getScore } from "./ScoreService";

const KEY_D = '@reward_d';
const KEY_W = '@reward_w';
const KEY_M = '@reward_m';
const KEY_P = '@reward_p';

const get = async (key) => {
  let obj = await CacheService.get(key);

  if(obj && obj != null){
    obj = JSON.parse(obj);

    return obj;
  }

  return null;
}

const getDailyReward = async () => {
  return get(KEY_D);
}

const getWeeklyReward = async () => {
  return get(KEY_W);
}

const getMonthlyReward = async () => {
  return get(KEY_M);
}

const getPointsReward = async () => {
  return get(KEY_P);
}

const save = async (key, obj) => {
  await CacheService.register(key, JSON.stringify(obj));

  return obj;
}

const saveMonthlyReward = async (obj) => {
  return save(KEY_M, obj);
}

const saveWeeklyReward = async (obj) => {
  return save(KEY_W, obj);
}

const saveDailyReward = async (obj) => {
  return save(KEY_D, obj);
}

const savePointsReward = async (obj) => {
  return save(KEY_P, obj);
}

const getRewardsByChild = async (childId) => {
  const score = await getScore(childId);

  let weeklyReward = Math.floor(score.qtdDias / 7);

  let monthlyReward = Math.floor(score.qtdDias / 30);

  let daysRewards = score.qtdDias + weeklyReward + monthlyReward;

  let pr = await getPointsReward();

  let pointsRewards = pr && pr !== null && pr.value > 0 
                        ? Math.floor(score.pontuacao / new Number(pr.value))
                        : 0;
  return {
    rewards: Math.floor(daysRewards + pointsRewards),
    dailyRewards: score.qtdDias,
    weeklyRewards: weeklyReward,
    monthlyRewards: monthlyReward,
    pointsRewards:pointsRewards,
    points: score.pontuacao
  };
}

export {
  getDailyReward,
  getWeeklyReward,
  getMonthlyReward,
  getPointsReward,
  saveDailyReward,
  saveWeeklyReward,
  saveMonthlyReward,
  savePointsReward,
  getRewardsByChild,
}