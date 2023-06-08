const xml_data = 
`<soapenv:Envelope xmlns:agw="https://www.ecp.mof.gov.sa/agw" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header/>
   <soapenv:Body wsu:Id="id-3EE7835C8B3F6A892916235896301933821" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
      <agw:PmtNotificationAGWRq>
         <agw:MsgRqHdr>
            <agw:RqUID>${=java.util.UUID.randomUUID()}</agw:RqUID>
            <agw:SCId>G2G</agw:SCId>
            <agw:FuncId>14560000</agw:FuncId>
            <agw:PartnerInfo>
               <agw:PartnerId>019000000000000000</agw:PartnerId>
               <agw:PartnerType>GOVT</agw:PartnerType>
            </agw:PartnerInfo>
            <agw:ClientDt>2021-09-19T15:22:08</agw:ClientDt>
         </agw:MsgRqHdr>
         <agw:Body>
            <agw:PmtList>
               <agw:PmtInfo>
                  <agw:AgencyId>019000000000000000</agw:AgencyId>
                  <agw:eCollectionPmtId>MMRA2021091914070500006087652</agw:eCollectionPmtId>
                  <agw:BillAcct>23302728093</agw:BillAcct>
                  <agw:BillCategory>OneTime</agw:BillCategory>
                  <agw:PmtAmt>100.00</agw:PmtAmt>
                  <agw:PmtDt>${=def now = new Date();now.format("yyyy-MM-dd")}</agw:PmtDt>
                  <agw:eCollectionPmtMethod>SADAD</agw:eCollectionPmtMethod>
                  <agw:eCollectionPmtMethodDtls>
                     <agw:PmtId>050076997476</agw:PmtId>
                     <agw:BankId>RJHISARI</agw:BankId>
                     <agw:BankPmtId>2000069775120000397751</agw:BankPmtId>
                     <agw:PmtChannel>INTERNET</agw:PmtChannel>
                  </agw:eCollectionPmtMethodDtls>
                  <agw:PmtStatusCode>Succeeded</agw:PmtStatusCode>
                  <agw:PayorPOI>
                     <agw:POINum>1075135473</agw:POINum>
                     <agw:POIType>NAT</agw:POIType>
                  </agw:PayorPOI>
               </agw:PmtInfo>
            </agw:PmtList>
         </agw:Body>
      </agw:PmtNotificationAGWRq>
   </soapenv:Body>
</soapenv:Envelope>`

export default xml_data; 