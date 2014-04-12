using System;

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

		public void SendMessage(string message, string sessionId)
		{
			throw new NotImplementedException ();
		}
	}
}
