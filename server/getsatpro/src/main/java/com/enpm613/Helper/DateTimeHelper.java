package com.enpm613.Helper;

import java.text.FieldPosition;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class DateTimeHelper {
	private static DateTimeHelper mInstance;
	
	private DateTimeHelper() {
	}
	
	public static DateTimeHelper getInstance() {
		if(mInstance == null)
			mInstance = new DateTimeHelper();
		return mInstance;
	}
	
	public String getLatestTime() {
		StringBuffer stringBuffer = new StringBuffer();
		Date now = new Date();

		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ssZ");
		
		return simpleDateFormat.format(now, stringBuffer, new FieldPosition(0)).toString();
	}
	
}
