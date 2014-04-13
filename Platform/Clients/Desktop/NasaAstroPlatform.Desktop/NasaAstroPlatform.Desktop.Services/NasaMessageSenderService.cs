using System;
using System.Net;
using System.Text;
using System.IO;

namespace NasaAstroPlatform.Desktop.Services
{
	public class NasaMessageSenderService : ServiceBase, IMessageSenderService
	{
		private const string ActivityTypeName = "nasa";

		public NasaMessageSenderService (string sessionId)
		{
			this.SessionId = sessionId;
		}

		public string SessionId { get; set; }

		public void SendMessage(string message)
		{
			try
			{
				var baseAddress = "http://79.124.67.13:8080/activities";

				var http = (HttpWebRequest)WebRequest.Create(new Uri(baseAddress));
				http.Accept = "application/json";
				http.ContentType = "application/json";
				http.Method = "POST";

				string parsedContent = "{\"content\":\"" + message + "\"}";
				ASCIIEncoding encoding = new ASCIIEncoding();
				Byte[] bytes = encoding.GetBytes(parsedContent);

				Stream newStream = http.GetRequestStream();
				newStream.Write(bytes, 0, bytes.Length);
				newStream.Close();

				var response = http.GetResponse();
				var stream = response.GetResponseStream();
				var sr = new StreamReader(stream);
				var content = sr.ReadToEnd();
			}
			catch (Exception ex) {
				// File.WriteAllText(@"C:\Temp\ex.txt", ex.ToString());
			}
		}
	}
}
