

        const  side0 = document.querySelector("#side0");
        const  side1 = document.querySelector("#side1");
        const  side2 = document.querySelector("#side2");
        const  side3 = document.querySelector("#side3");
        const  side4 = document.querySelector("#side4");
        const  side5 = document.querySelector("#side5");
        const  side6 = document.querySelector("#side6");
        const  side7 = document.querySelector("#side7");
        const  side8 = document.querySelector("#side8");
        var range;

        DashBtnId = document.querySelector("#DashBtnId");
        dashboard__ = document.querySelector("#dashboard__");
        PersonalAssessment = document.querySelector("#PersonalAssessment");
        body__ = document.querySelector("#body__");
        PAssBtn0 = document.querySelector("#PAssBtn0");
        CommunityAssessment = document.querySelector("#CommunityAssessment");
        BtnPrev1 = document.querySelector("#BtnPrev1");
        origHistoricalAss_ = document.querySelector("#origHistoricalAss_");
        PAssBtn1_ = document.querySelector("#PAssBtn1");
        BtnHisPrev1 = document.querySelector("#BtnHisPrev1");
        LeadershipAss = document.querySelector("#LeadershipAss");
        PassHisBtn1 = document.querySelector("#PassHisBtn1");
        BtnLeadPrev1 = document.querySelector("#BtnLeadPrev1");
        LogicalAss_ = document.querySelector("#LogicalAss_");
        PassLeadBtn1 = document.querySelector("#PassLeadBtn1");
        ValueX = document.querySelector("#ValueX");
        pledg3 = document.querySelector(".pledg3");
        BtnLogicalPrev1 = document.querySelector("#BtnLogicalPrev1");
        PassBtnLogical1 = document.querySelector("#PassBtnLogical1");
        Codes = document.querySelector(".Codes");
        const  buttonNext1 = document.querySelector("#buttonNext1");
        buttonNext2 = document.querySelector("#buttonNext2");
        Pledge = document.querySelector(".Pledge");
        buttonNext3 = document.querySelector("#buttonNext3");
        ActionX = document.querySelector("#ActionX");
        ActbuttonNext4 = document.querySelector("#ActbuttonNext4");
        CampaignX = document.querySelector("#CampaignX");
        buttonNext5 = document.querySelector("#buttonNext5");
        volonteerX = document.querySelector("#volonteerX");
        buttonNext6 = document.querySelector("#buttonNext6");
        certificate = document.querySelector("#certificate");
        trustworthiness = document.querySelector("#trustworthiness");
        realCodes = document.querySelector("#realCodes");
        allAssessment = document.querySelector("#allAssessment");
        assessmentReportPage = document.querySelector("#assessmentReportPage");
        PassBtnLogical3 = document.querySelector("#PassBtnLogical3");
        traning = document.querySelector("#traning");
        videoXXX = document.querySelector("#VARR");
        Trainingbtn = document.querySelector("#Trainingbtn");
        contVideo = document.querySelector("#contVideo");

        // DashBtnId.addEventListener("click", ActivateAssessment);
        PAssBtn0.addEventListener("click", ActivateCommunityAss);
        // BtnPrev1.addEventListener("click", ActivatePersonalAss);
        PAssBtn1.addEventListener("click", ActivateHistoryAss);
        BtnHisPrev1.addEventListener("click", ActivateCommunityAss);
        PassHisBtn1.addEventListener("click", ActivateLeadershipAss);
        BtnLeadPrev1.addEventListener("click", ActivateHistoryAss);
        PassLeadBtn1.addEventListener("click", ActivateLogicalAss);
        PassBtnLogical1.addEventListener("click", ActivateassessmentReportPageValues);
        // BtnLogicalPrev1.addEventListener("click", ActivateLeadershipAss);
        buttonNext1.addEventListener("click", ActivateTraningAss);
        buttonNext2.addEventListener("click", ActivatePledgeAss);
        buttonNext3.addEventListener("click", ActivateActionAss);
        ActbuttonNext4.addEventListener("click", ActivateCampignAss);
        buttonNext5.addEventListener("click", ActivateVolonteerAss);
        buttonNext6.addEventListener("click", ActivateCertificateAss);
        trustworthiness.addEventListener("click", ActivateCodesRealAss);
        PassBtnLogical3.addEventListener("click", ActivateValues);
        Trainingbtn.addEventListener("click", ActivateVideoX);
        contVideo.addEventListener("click", ActivateAltCodes);
        

        
      

        function ActivateCodesRealAss(){
            dashboard__.style.display = "none";
            window.location.href = "#realCodes";
            realCodes.style.display = "block";
            body__.style.height = "800px";
        }

       

        function ActivateallAssesmentAss(){
            realCodes.style.display = "none";
            allAssessment.style.display = "block";
            window.location.href = "#PersonalAssessment";
            PersonalAssessment.style.display = "block";
            side1.style.opacity = "1.0";
            body__.style.height = "1000px";
        }

        function ActivateassessmentReportPageValues(){
            allAssessment.style.display = "none";
            LogicalAss_.style.display = "none";
            window.location.href = "#assessmentReportPage";
        assessmentReportPage.style.display = "block";
        body__.style.height = "600px";
        }

        
        function ActivateValues(){
            side2.style.opacity = "1.0";
            assessmentReportPage.style.display = "none";
            window.location.href = "#ValueX";
            ValueX.style.display = "block";
            body__.style.height = "3200px";
        }

        // function ActivatePersonalAss(){
        //     PersonalAssessment.style.display = "block";
        //     CommunityAssessment.style.display = "none";
        //     origHistoricalAss_.style.display = "none";
        //     LeadershipAss.style.display = "none";
        //     LogicalAss_.style.display = "none";
        // }

        function ActivateCommunityAss(){
            PersonalAssessment.style.display = "none";
            window.location.href = "#CommunityAssessment";
            CommunityAssessment.style.display = "block";
            origHistoricalAss_.style.display = "none";
            LeadershipAss.style.display = "none";
            LogicalAss_.style.display = "none";
        }

        function ActivateHistoryAss(){
            PersonalAssessment.style.display = "none";
            CommunityAssessment.style.display = "none";
            window.location.href = "#origHistoricalAss_";
            origHistoricalAss_.style.display = "block";
            LeadershipAss.style.display = "none";
            LogicalAss_.style.display = "none";
        }

        function ActivateLeadershipAss(){
            PersonalAssessment.style.display = "none";
            CommunityAssessment.style.display = "none";
            origHistoricalAss_.style.display = "none";
            window.location.href = "#LeadershipAss";
            LeadershipAss.style.display = "block";
            LogicalAss_.style.display = "none";
            body__.style.height = "1000px";
        }

        function ActivateLogicalAss(){
            PersonalAssessment.style.display = "none";
            CommunityAssessment.style.display = "none";
            origHistoricalAss_.style.display = "none";
            LeadershipAss.style.display = "none";
            window.location.href = "#LogicalAss_";
            LogicalAss_.style.display = "block";
            body__.style.height = "1000px";
        }
      


        // function ActivateAssessment(){
        //     side1.style.opacity = "1.0";
        //     dashboard__.style.display = "none";
        //     PersonalAssessment.style.display = "block";
        //     body__.style.height = "800px";
        //     side1.addEventListener("click", ActivateAssessment);
        // }



        function ActivateTraningAss(){
            ValueX.style.display = "none";
            window.location.href = "#traning";
            traning.style.display = "block";
            body__.style.height = "1100px";
        }

        function ActivateVideoX(){
            allAssessment.style.display = "none";
            PersonalAssessment.style.display = "none";
            traning.style.display = "none";
            window.location.href = "#VARR";
            videoXXX.style.display = "block";
            body__.style.height = "850px";
        }

        function ActivateAltCodes(){
            allAssessment.style.display = "none";
            PersonalAssessment.style.display = "none";
            traning.style.display = "none";
            videoXXX.style.display = "none";
            side3.style.opacity = "1.0";
            window.location.href = "#Codes";
            Codes.style.display = "block";
            body__.style.height = "2500px";
        }

        function ActivatePledgeAss(){
            side4.style.opacity = "1.0";
            Codes.style.display = "none";
            window.location.href = "#Pledge";
            Pledge.style.display = "block";
            body__.style.height = "600px";
        }

        function ActivateActionAss(){
            side5.style.opacity = "1.0";
            Pledge.style.display = "none";
            window.location.href = "#ActionX";
            ActionX.style.display = "block";
            body__.style.height = "800px";
        }

        function ActivateCampignAss(){
            side6.style.opacity = "1.0";
            ActionX.style.display = "none";
            window.location.href = "#CampaignX";
            CampaignX.style.display = "block";
            body__.style.height = "1300px";
        }

        function ActivateVolonteerAss(){
            side7.style.opacity = "1.0";
            CampaignX.style.display = "none";
            window.location.href = "#volonteerX";
            volonteerX.style.display = "block";
            body__.style.height = "500px";
        }

        function ActivateCertificateAss(){
            side8.style.opacity = "1.0";
            volonteerX.style.display = "none";
            window.location.href = "#certificate";
            certificate.style.display ="block";
            body__.style.height = "900px";
        }



        function EnableSide1(){
            side3.style.opacity = "1.0";
            PersonalAssessment.style.display = "block";
            value.style.display = "none";
            Codes.style.display = "none";
            Pledge.style.display = "none";
            Action.style.display = "none";
            cover_campaign.style.display = "none";
            title00.style.display = "none";
            cover_div0.style.display = "none";
            certificate.style.display ="none";
        }

        function copyDivToClipboard() {
            range = document.createRange();
            range.selectNode(document.getElementById("pledg1Id"));
            window.getSelection().removeAllRanges(); // clear current selection
            window.getSelection().addRange(range); // to select text
            document.execCommand("copy");
            window.getSelection().removeAllRanges();// to deselect
            // pledg3.value = " ";
            setTimeout(rr, 1000);
        }


        function rr(){
            console.log("Jesus");
            pledg3.value += range;
            pledg3.style.textAlign = "left";
            pledg3.style.wordSpacing= "-2px";
            pledg3.style.padding = "0px";
            pledg3.style.textIndent= "-20px";
        }


