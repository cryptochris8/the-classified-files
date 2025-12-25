/**
 * UAP Investigation Story
 * Migrated from uap-story-expanded.js
 * This is a partial migration - full story will be completed in Phase 9
 */

const UAPStory = {
  id: 'uap',
  title: 'UAP Investigation',
  description: 'Investigate Unidentified Aerial Phenomena reports',
  sealed: false,
  releaseDate: 'FREE - Always Available',

  scenes: {
    intro: {
      text: `THE CLASSIFIED FILES: UAP INVESTIGATION

DAY 1 - TUESDAY, 9:15 PM

You are Dr. Amanda Torres, senior aerospace analyst for the All-domain Anomaly Resolution Office (AARO). The Pentagon office is quiet except for the hum of secure servers processing classified UAP reports.

Your supervisor approaches with a classified briefcase. "Dr. Torres, we just received the latest batch of UAP incident reports. 757 new cases from the past year, including 21 that our analysts can't explain."

Inside: The most recent Pentagon UAP data, including incidents at nuclear facilities, military installations, and encounters with advanced flight characteristics that defy known physics.

Your colleague, Dr. Sarah Kim, leans over. "Amanda, look at this - we have multiple reports of UAPs exhibiting transmedium travel, instantaneous acceleration, and no visible propulsion. The Senate hearing is tomorrow."

A classified memo catches your eye: "18 incidents near nuclear weapons facilities. Congressional oversight demanded. Full transparency protocols now in effect."

Your secure phone buzzes. Text from AARO Director: "The public deserves answers based on evidence, not speculation. Start with the most credible cases. Time to separate fact from fiction."

The weight of scientific truth rests on your analysis.`,
      image: 'pentagon_uap_office',
      sources: [
        'Pentagon AARO Reports 2024',
        'Congressional UAP Hearings',
        'Declassified Military Analysis',
      ],
      educationalNote:
        'This investigation uses real data from Pentagon AARO reports and congressional testimony to explore factual UAP phenomena.',
      prompt: 'How will you proceed with your investigation?',
      choices: [
        {
          text: 'Examine the 757 new UAP reports and statistical breakdown',
          nextScene: 'uap_statistics_analysis',
          progressIncrease: 10,
          factual: true,
          evidence: true,
        },
        {
          text: 'Focus on the 21 unexplained cases with anomalous characteristics',
          nextScene: 'anomalous_cases_study',
          progressIncrease: 12,
          evidence: true,
        },
        {
          text: 'Investigate UAP incidents at nuclear weapons facilities',
          nextScene: 'nuclear_facility_incidents',
          progressIncrease: 15,
          factual: true,
          evidence: true,
        },
        {
          text: 'Review the Pentagon\'s historical UAP disinformation campaign',
          nextScene: 'historical_disinformation',
          progressIncrease: 8,
          factual: true,
          evidence: true,
        },
      ],
    },

    uap_statistics_analysis: {
      text: `UAP REPORT ANALYSIS - AARO DATA BREAKDOWN

DAY 1 - 9:45 PM

You spread the latest AARO statistical analysis across your workstation. The numbers reveal patterns in the most comprehensive UAP study ever conducted.

AARO UAP STATISTICS - FISCAL YEAR 2024
Total Reports Received: 757 cases
New Incidents (May 2023-June 2024): 485 cases
Historical Reports (2021-2022): 272 cases
Cases Resolved: 118 cases

Resolution Categories:
- Balloons (weather/party): 42 cases
- Birds: 31 cases
- Drones/UAS: 28 cases
- Other prosaic objects: 17 cases

Cases Under Investigation: 639 cases
Unexplained "True Anomalies": 21 cases

Dr. Kim reviews the data. "Amanda, only 15% of cases have been resolved. That's a significant investigative backlog."

You notice a pattern in the unresolved cases: "Look at this - the unexplained incidents show consistent flight characteristics: instantaneous acceleration, right-angle turns at high speed, no visible propulsion."

Your secure terminal displays a new message: "Congressional briefing requires focus on cases with multiple sensor confirmations and military witness testimony."`,
      image: 'uap_data_analysis',
      sources: ['AARO FY2024 Consolidated Annual Report', 'Pentagon UAP Database'],
      educationalNote:
        'These statistics are taken directly from the Pentagon\'s official AARO annual report to Congress.',
      choices: [
        {
          text: 'Analyze the flight characteristics of unexplained cases',
          nextScene: 'flight_characteristics_study',
          progressIncrease: 18,
          factual: true,
          evidence: true,
        },
        {
          text: 'Review multi-sensor data from military encounters',
          nextScene: 'military_sensor_data',
          progressIncrease: 15,
          evidence: true,
        },
        {
          text: 'Examine the cases resolved as conventional objects',
          nextScene: 'investigation_complete',
          progressIncrease: 10,
          factual: true,
        },
      ],
    },

    nuclear_facility_incidents: {
      text: `NUCLEAR FACILITY UAP INCIDENTS - CLASSIFIED ANALYSIS

DAY 1 - 10:20 PM

You access the most sensitive files - UAP encounters at nuclear weapons facilities. The implications for national security are profound.

NUCLEAR FACILITY INCIDENTS - CLASSIFIED
Total Nuclear Site Incidents: 18 reports
Extended Overflights (>5 minutes): 10 incidents
Historical Pattern: F.E. Warren AFB (1967, 2010)
Malmstrom AFB: Multiple incidents spanning decades
Reported Effects: Temporary weapons system anomalies
Witness Accounts: Military personnel, radar operators
Common Characteristics: Hovering behavior, no heat signature
Security Response: Immediate scrambled intercepts
Investigation Status: Ongoing analysis

Dr. Kim looks concerned. "These aren't random encounters, Amanda. There's a clear pattern of interest in our most sensitive military assets."

A classified supplement reveals: "Former missile launch officers report UAPs allegedly interfering with nuclear weapon systems in 1967. Similar reports continue to present day."

Your analysis terminal flags a correlation: "Historical incidents show UAPs appearing during weapons system tests and maintenance periods."

The national security implications are undeniable.`,
      image: 'nuclear_facility_monitoring',
      sources: [
        'AARO Nuclear Facility Analysis',
        'Classified Military Reports',
        'Congressional Security Briefings',
      ],
      educationalNote:
        'AARO has confirmed 18 UAP incidents near nuclear weapons facilities, with ongoing investigation into their nature and intent.',
      choices: [
        {
          text: 'Study the 1967 Malmstrom AFB incident in detail',
          nextScene: 'malmstrom_incident_study',
          progressIncrease: 20,
          factual: true,
          evidence: true,
        },
        {
          text: 'Analyze modern radar tracking of nuclear site overflights',
          nextScene: 'investigation_complete',
          progressIncrease: 15,
          evidence: true,
        },
        {
          text: 'Review witness testimony from military personnel',
          nextScene: 'investigation_complete',
          progressIncrease: 18,
          evidence: true,
        },
      ],
    },

    anomalous_cases_study: {
      text: `THE 21 UNEXPLAINED CASES - ANOMALOUS FLIGHT PATTERNS

DAY 1 - 10:00 PM

You focus on the 21 cases that AARO cannot explain with conventional explanations. These represent the most scientifically significant reports.

ANOMALOUS CASE CHARACTERISTICS:
- 5 cases with confirmed radar and visual sightings
- 8 cases with infrared sensor confirmation
- 6 cases with multiple military witness accounts
- 2 cases with electromagnetic interference effects

Common Flight Characteristics Observed:
1. Instantaneous acceleration (0 to hypersonic in seconds)
2. Transmedium travel (air to water with no splash)
3. Stationary hovering with no visible propulsion
4. Extreme altitude changes (sea level to 80,000 ft)
5. Right-angle turns at hypersonic speeds

Dr. Kim pulls up a visualization. "Amanda, look at this trajectory data. These movements would generate G-forces that would destroy any known aircraft and kill any biological pilot."

You study the sensor data carefully. Multiple independent sensors recorded the same impossible maneuvers.

The evidence is compelling but the implications are extraordinary.`,
      image: 'anomalous_flight_data',
      sources: [
        'AARO Anomalous Flight Analysis',
        'Navy Pilot Testimony',
        'Multi-Sensor Correlation Reports',
      ],
      educationalNote:
        'The Pentagon has confirmed that a small percentage of UAP reports show flight characteristics that cannot be explained by known technology.',
      choices: [
        {
          text: 'Deep dive into the multi-sensor confirmed cases',
          nextScene: 'investigation_complete',
          progressIncrease: 20,
          factual: true,
          evidence: true,
        },
        {
          text: 'Analyze the physics implications of observed movements',
          nextScene: 'investigation_complete',
          progressIncrease: 15,
          evidence: true,
        },
        {
          text: 'Review cockpit recordings from pilot encounters',
          nextScene: 'investigation_complete',
          progressIncrease: 18,
          evidence: true,
        },
      ],
    },

    historical_disinformation: {
      text: `HISTORICAL UAP DISINFORMATION - PENTAGON REVELATIONS

DAY 1 - 10:30 PM

You access recently declassified files revealing decades of government disinformation about UAP phenomena.

HISTORICAL DISINFORMATION PROGRAMS:
Project Blue Book (1952-1969): Official investigation that publicly dismissed UAP reports while privately documenting unexplained cases.

Project Grudge/Sign: Earlier programs that established the pattern of public denial.

1997 Air Force "Mogul Explanation": The Roswell incident attributed to Project Mogul weather balloons, despite ongoing debate.

AARO Interim Report (2024): "No verifiable evidence that any UAP sighting has represented extraterrestrial technology. However, absence of evidence is not evidence of absence."

Dr. Kim notes: "The pattern is clear - for decades, the government policy was to dismiss and discredit rather than investigate transparently."

Recent congressional testimony revealed that some military witnesses were discouraged from reporting UAP encounters through their careers.

The question remains: what was being hidden, and why?`,
      image: 'declassified_documents',
      sources: [
        'Declassified Project Blue Book Files',
        'Congressional Testimony 2024',
        'AARO Historical Analysis',
      ],
      educationalNote:
        'The U.S. government has acknowledged that previous UAP investigation programs prioritized public relations over scientific inquiry.',
      choices: [
        {
          text: 'Examine Project Blue Book\'s classified findings',
          nextScene: 'investigation_complete',
          progressIncrease: 15,
          factual: true,
          evidence: true,
        },
        {
          text: 'Review recent whistleblower testimony',
          nextScene: 'investigation_complete',
          progressIncrease: 20,
          evidence: true,
        },
        {
          text: 'Analyze the shift to transparency under AARO',
          nextScene: 'investigation_complete',
          progressIncrease: 12,
          factual: true,
        },
      ],
    },

    flight_characteristics_study: {
      text: `ANOMALOUS FLIGHT CHARACTERISTICS - PHYSICS ANALYSIS

DAY 1 - 11:00 PM

You examine the most puzzling aspect of UAP reports - flight characteristics that appear to violate known physics principles.

OBSERVED ANOMALOUS BEHAVIORS:

1. INSTANTANEOUS ACCELERATION
Objects observed accelerating from stationary to hypersonic speeds with no visible propulsion and no sonic boom.

2. TRANSMEDIUM TRAVEL
UAPs observed entering and exiting water at high speeds without creating expected splash or turbulence.

3. ANTI-GRAVITY BEHAVIOR
Objects hovering indefinitely with no rotor wash, exhaust, or visible means of support.

4. IMPOSSIBLE MANEUVERS
Right-angle turns at speeds that would require 100+ G-forces - fatal to any biological pilot.

Dr. Kim calculates: "If these observations are accurate, we're either looking at revolutionary human technology we don't know about, or something beyond our current scientific understanding."

The data is consistent across multiple independent sensors and trained military observers. This isn't imagination - it's documented evidence.`,
      image: 'physics_analysis',
      sources: [
        'Navy Sensor Analysis',
        'AARO Physics Report',
        'Pentagon Flight Dynamics Study',
      ],
      educationalNote:
        'Military personnel and sensors have documented flight behaviors that challenge our understanding of physics and propulsion technology.',
      choices: [
        {
          text: 'Continue to the investigation conclusion',
          nextScene: 'investigation_complete',
          progressIncrease: 25,
          evidence: true,
        },
      ],
    },

    malmstrom_incident_study: {
      text: `MALMSTROM AFB INCIDENT - HISTORICAL ANALYSIS

DAY 2 - 8:00 AM

You review one of the most documented UAP incidents in history - the 1967 Malmstrom AFB encounter.

MALMSTROM AFB INCIDENT - MARCH 1967

Location: Malmstrom Air Force Base, Montana
Witnesses: Captain Robert Salas, security personnel
Duration: Approximately 10 minutes

INCIDENT SUMMARY:
A glowing red-orange UAP was observed hovering over the front gate of the missile facility. During the sighting:

- 10 Minuteman nuclear missiles went offline simultaneously
- Security personnel reported extreme fear and disorientation
- The UAP departed at extremely high speed with no sonic boom
- All missiles came back online after the UAP left

Captain Salas testified before Congress in 2024: "I was underground in the launch capsule when my security guard called down, terrified. The missiles were shutting down one by one. We had no explanation then, and we still don't now."

This incident has been corroborated by multiple military witnesses over five decades.

Similar incidents have been reported at nuclear facilities worldwide.`,
      image: 'malmstrom_incident',
      sources: [
        'Captain Robert Salas Testimony',
        'Congressional UAP Hearing 2024',
        'FOIA Released Documents',
      ],
      educationalNote:
        'The Malmstrom AFB incident remains one of the most well-documented UAP encounters involving nuclear weapons systems.',
      choices: [
        {
          text: 'Complete the investigation with your findings',
          nextScene: 'investigation_complete',
          progressIncrease: 30,
          factual: true,
          evidence: true,
        },
      ],
    },

    investigation_complete: {
      text: `INVESTIGATION COMPLETE - FINAL ANALYSIS

DAY 7 - FRIDAY, 6:00 PM

After a week of intensive analysis, you compile your findings for the congressional briefing.

DR. TORRES' INVESTIGATION SUMMARY:

CONFIRMED FACTS:
- 757 new UAP reports received by AARO in FY2024
- 21 cases show truly anomalous characteristics
- 18 incidents documented near nuclear facilities
- Multiple sensor systems have recorded unexplained phenomena
- Decades of government disinformation now acknowledged

UNEXPLAINED PHENOMENA:
- Flight characteristics that defy known physics
- Pattern of interest in nuclear weapons facilities
- Consistent witness testimony from trained observers
- Multi-sensor confirmations that rule out sensor error

CONCLUSIONS:
1. Something is operating in restricted airspace
2. The technology observed exceeds known human capabilities
3. National security concerns are legitimate and documented
4. Scientific investigation must continue with full transparency

Dr. Kim reviews your report. "Amanda, this is going to change everything. The public deserves to know what our sensors are detecting."

The truth is no longer classified. The investigation continues.

🏆 INVESTIGATION COMPLETE - ALL EVIDENCE COLLECTED`,
      image: 'investigation_complete',
      sources: [
        'Your Complete Investigation Analysis',
        'AARO Final Report',
        'Congressional Briefing Materials',
      ],
      educationalNote:
        'Congratulations on completing the UAP investigation! The facts presented are based on real Pentagon reports and congressional testimony.',
      choices: [],
    },
  },
}

export default UAPStory
