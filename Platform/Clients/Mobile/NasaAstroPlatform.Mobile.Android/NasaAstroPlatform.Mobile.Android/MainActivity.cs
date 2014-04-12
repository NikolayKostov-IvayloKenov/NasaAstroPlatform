using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace NasaAstroPlatform.Mobile.Android
{
	[Activity (Label = "NasaAstroPlatform.Mobile.Android", MainLauncher = true)]
	public class MainActivity : Activity
	{
		int count = 1;

		protected override void OnCreate (Bundle bundle)
		{
			base.OnCreate (bundle);

			// Set our view from the "main" layout resource
			SetContentView (Resource.Layout.Main);

			// Get our button from the layout resource,
			// and attach an event to it
			Button button = FindViewById<Button> (Resource.Id.myButton);
			
			button.Click += delegate {
				button.Text = string.Format ("{0} clicks!", count++);
				sendAlertToPebble("Niki!");
			};
		}

		private void sendAlertToPebble(System.String msgBody) 
		{
			var i = new Intent("com.getpebble.action.SEND_NOTIFICATION");
			string notificationData = @"[{""title"":""Test Message"",""body"":"""+msgBody+@"""}]";
			i.PutExtra("messageType", "PEBBLE_ALERT");
			i.PutExtra("sender", "FSHBT");
			i.PutExtra("notificationData", notificationData);
			// Log.Debug(TAG, "About to send a modal alert to Pebble: " + notificationData);
			SendBroadcast(i);
		}
	}
}


