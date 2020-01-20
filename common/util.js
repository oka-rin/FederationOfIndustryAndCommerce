function friendlyDate(timestamp) {
	// 将时间戳转换为:年月日
	  var da = timestamp;
	  da = new Date(da);
	  var year = da.getFullYear()+'年';
	  var month = da.getMonth()+1+'月';
	  var date = da.getDate()+'日';
	return [year,month,date].join('');
};
function friendlyDateAndMonth(timestamp){
	var da = timestamp;
	da = new Date(da);
	var month = da.getMonth()+1;
	var date = da.getDate();
	return [month,date].join('-');
}
export {
	friendlyDate,friendlyDateAndMonth
}
