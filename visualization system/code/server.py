from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # 启用跨域支持

# 模拟数据库数据（实际可连接MySQL/PostgreSQL等数据库）
# 数据结构与前端图表需求匹配
mock_data = {
    # 战队数据（用于排行榜、胜负数据、胜率图表）
    "teams": [
        {
            "rank": 1,
            "name": "T1",
            "matches": 7,        # 总场次
            "victories": 6,      # 胜利场次
            "defeats": 1,        # 失败场次
            "win_rate": "86%",
            "eye_placement": 146,  # 插眼数（对应WBG战队数据）
        },
        {
            "rank": 2,
            "name": "GEN",
            "matches": 5,
            "victories": 4,
            "defeats": 1,
            "win_rate": "80%",
            "eye_placement": 120,
        },
        {
            "rank": 3,
            "name": "LNG",
            "matches": 4,
            "victories": 3,
            "defeats": 1,
            "win_rate": "75%",
            "eye_placement": 110,
        },
        {
            "rank": 4,
            "name": "BLG",
            "matches": 8,
            "victories": 5,
            "defeats": 3,
            "win_rate": "63%",
            "eye_placement": 105,
        }
    ],
    
    # 选手数据（用于个人排行榜、击杀/死亡数据）
    "players": [
        {
            "rank": 1,
            "name": "LNGScout",
            "position": "中单",
            "kills": 34,
            "assists": 59,
            "deaths": 10,
        },
        {
            "rank": 2,
            "name": "GENPeyz",
            "position": "ADC",
            "kills": 58,
            "assists": 87,
            "deaths": 17,
        },
        {
            "rank": 3,
            "name": "GENChovy",
            "position": "中单",
            "kills": 59,
            "assists": 72,
            "deaths": 18,
        }
    ],
    
    # 英雄数据（用于英雄排行榜）
    "heroes": [
        {
            "name": "熔铁少女",
            "matches": 54,
            "pick_rate": "51%",
            "win_rate": "46%",
        },
        {
            "name": "武器大师",
            "matches": 42,
            "pick_rate": "40%",
            "win_rate": "52%",
        },
        {
            "name": "上古领主",
            "matches": 39,
            "pick_rate": "37%",
            "win_rate": "72%",
        }
    ],
    
    # 战队统计数据（用于胜率、击杀、插眼等小图表）
    "team_stats": {
        "T1": {
            "win_rate": 86,  # 用于zb1图表（数值型）
        },
        "BLG": {
            "kills": 305,     # 总击杀（对应zb2图表）
            "deaths": 255,
        },
        "WBG": {
            "eye_placement": 146,  # 插眼数（对应zb3图表）
            "ward_clear": 67,      # 排眼数
        },
        "BLGKnight": {
            "kills": 94,        # 对应zb4图表
            "deaths": 40,
        },
        "FLYBwipo": {
            "deaths": 58,       # 对应zb5图表
            "kills_assists": 57,
        },
        "LNGScout": {
            "kills": 34,        # 对应zb6图表
            "assists": 59,
            "deaths": 10,
        }
    }
}


@app.route('/api/teams', methods=['GET'])
def get_teams():
    """获取战队排行榜数据"""
    return jsonify(mock_data["teams"])


@app.route('/api/players', methods=['GET'])
def get_players():
    """获取个人排行榜数据"""
    return jsonify(mock_data["players"])


@app.route('/api/heroes', methods=['GET'])
def get_heroes():
    """获取英雄数据"""
    return jsonify(mock_data["heroes"])


@app.route('/api/team-stats/<string:key>', methods=['GET'])
def get_team_stats(key):
    """获取特定战队/选手的统计数据（用于小图表）"""
    return jsonify(mock_data["team_stats"].get(key, {}))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)